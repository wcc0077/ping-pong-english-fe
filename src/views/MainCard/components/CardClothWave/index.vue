<template>
  <div class="card-cloth-wave">
    <div class="clothes-line" id="clothesLine"></div>

    <div class="control-panel">
      <div class="wind-control">
        <div class="slider-container" style="display: none">
          <span>风力强度:</span>
          <input type="range" id="windStrength" min="0" max="10" value="3" />
          <span id="windValue">3</span>
        </div>
        <div class="cloth-options" style="display: none">
          <button id="addTshirt">添加T恤</button>
          <button id="addPants">添加裤子</button>
          <button id="clearAll">清空</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useMainCardStore } from '@/stores/mainCard'
import { playSingleAudio } from '@/gloabl/audio'
import { useAnimScale } from '@/hooks/useAnim/useScale'
import { useAnimSplit } from '@/hooks/useAnim/useSplit'
import { SplitText } from 'gsap/SplitText'

const store = useMainCardStore()

let clothes = [] // 存储衣物数据
let addCloth = () => {} // 占位

watch(()=> store.clothWaveWords, ()=> {
  addCloth()
}, {deep: true})

onMounted(() => {
  const clothesLine = document.getElementById('clothesLine')
  const windStrength = document.getElementById('windStrength')
  const windValue = document.getElementById('windValue')
  const addTshirtBtn = document.getElementById('addTshirt')
  const addPantsBtn = document.getElementById('addPants')
  const clearAllBtn = document.getElementById('clearAll')

  let windPower = 0.6

  let animationId

  // 衣物类型配置
  const clothTypes = {
    tshirt: {
      name: 'T恤',
      width: 50,
      height: 70,
      colors: ['#FF5252', '#4CAF50', '#2196F3', '#FFC107'],
      elasticity: 0.3,
      weight: 1.2,
    },
    pants: {
      name: '裤子',
      width: 70,
      height: 100,
      colors: ['#795548', '#607D8B', '#9E9E9E', '#3E2723'],
      elasticity: 0.2,
      weight: 1.5,
    },
  }

  // 初始化
  function init() {
    // 添加初始衣物
    // addCloth('pants');
    store.clothWaveWords.forEach(() => {
      addCloth()
    })

    // 设置事件监听
    windStrength.addEventListener('input', updateWind)
    addTshirtBtn.addEventListener('click', () => addCloth('tshirt'))
    addPantsBtn.addEventListener('click', () => addCloth('pants'))
    clearAllBtn.addEventListener('click', clearAllClothes)

    // 开始动画
    animateClothes()
  }

  // 添加衣物
  addCloth = function (type='tshirt', targetClass = '') {
    const lineWidth = clothesLine.offsetWidth
    const clothType = clothTypes[type]
    const color = clothType.colors[Math.floor(Math.random() * clothType.colors.length)]

    // 创建衣物容器
    const container = document.createElement('div')
    container.className = 'cloth-container'
    // container.style.left = `${Math.random() * (lineWidth - clothType.width)}px`;

    const step = lineWidth / 7
    clothes.forEach((c, index) => {
      c.container.style.left = `${step * (index * 2 + 3)}px`
    })
    container.style.left = `${step}px`

    // 创建晾衣绳
    const string = document.createElement('div')
    string.className = 'clothes-line-string'
    string.style.height = '20px'
    string.style.left = '50%'
    string.style.transform = 'translateX(-50%)'

    // 创建衣物
    const cloth = document.createElement('div')
    cloth.className = 'cloth'
    cloth.style.width = `${clothType.width}px`
    cloth.style.height = `${clothType.height}px`
    // cloth.style.backgroundColor = color;
    cloth.style.backgroundColor = 'white'
    cloth.style.top = '20px'

    // 组装单词和图片
    const word = document.createElement('div')
    word.className = 'cloth-word'
    // word.innerHTML = store.clothWaveWords[0].spell
    word.style.transform = `rotate(${-15 + Math.random() * 30}deg)`
    word.style.transformOrigin = 'center'
    const img = document.createElement('img')
    // img.src = store.clothWaveWords[0].pic
    img.className = 'cloth-pic'
    cloth.appendChild(img)
    cloth.appendChild(word)

    const { anim } = useAnimScale(cloth)
    cloth.addEventListener('click', () => {
      playSingleAudio(cloth.wordData.audio)
      anim.restart()

      // const { chars } = SplitText.create(word, { type: 'chars' })
      // const { anim: splitAnim } = useAnimSplit(chars)
      // splitAnim.restart()
    })

    // 添加衣物细节
    if (type === 'tshirt') {
      cloth.style.borderRadius = '5px 5px 0 0'
      // 添加领口效果
      const neck = document.createElement('div')
      neck.style.position = 'absolute'
      neck.style.width = '20px'
      neck.style.height = '10px'
      neck.style.backgroundColor = 'rgba(0,0,0,0.1)'
      neck.style.borderRadius = '0 0 10px 10px'
      neck.style.top = '0'
      neck.style.left = '50%'
      neck.style.transform = 'translateX(-50%)'
      cloth.appendChild(neck)
    } else {
      // 裤子效果
      cloth.style.display = 'flex'
      cloth.style.justifyContent = 'space-between'

      const leftLeg = document.createElement('div')
      leftLeg.style.width = '30%'
      leftLeg.style.height = '100%'
      leftLeg.style.backgroundColor = color
      leftLeg.style.borderRight = '1px solid rgba(0,0,0,0.2)'

      const rightLeg = document.createElement('div')
      rightLeg.style.width = '30%'
      rightLeg.style.height = '100%'
      rightLeg.style.backgroundColor = color
      rightLeg.style.borderLeft = '1px solid rgba(0,0,0,0.2)'

      cloth.appendChild(leftLeg)
      cloth.appendChild(rightLeg)
    }

    // 组装元素
    container.appendChild(string)
    container.appendChild(cloth)
    clothesLine.appendChild(container)

    // 保存衣物数据
    clothes.unshift({
      container: container,
      string: string,
      cloth: cloth,
      type: type,
      x: parseFloat(container.style.left),
      swing: Math.random() * 5 + 5,
      swingSpeed: 0.02 + Math.random() * 0.03,
      swingPhase: Math.random() * Math.PI * 2,
      rotation: 0,
      stringAngle: 0,
      elasticity: clothType.elasticity,
      weight: clothType.weight,
      word,
      img,
      // WordData: {}
    })
  }

  // 更新风力
  function updateWind() {
    windPower = parseInt(windStrength.value)
    windValue.textContent = windPower
  }

  // 清空所有衣物
  function clearAllClothes() {
    clothesLine.innerHTML = ''
    clothes = []
  }

  // 动画循环
  function animateClothes() {
    clothes.forEach((cloth, index) => {
      cloth.swingPhase += cloth.swingSpeed * (1 + windPower * 0.1)

      // 计算物理效果
      const swingAmount = cloth.swing * windPower
      const xOffset = Math.sin(cloth.swingPhase) * swingAmount

      // 计算晾衣绳角度 (基于风力)
      cloth.stringAngle = Math.sin(cloth.swingPhase) * windPower * 2

      // 计算衣物旋转 (基于风力)
      cloth.rotation = Math.sin(cloth.swingPhase * 1.2) * windPower * 3

      // 计算衣物变形 (基于风力)
      const scaleX = 1 + Math.sin(cloth.swingPhase) * windPower * 0.02 * cloth.elasticity
      const scaleY = 1 - Math.abs(Math.cos(cloth.swingPhase) * windPower * 0.01 * cloth.elasticity)

      // 应用晾衣绳变换
      cloth.string.style.transform = `translateX(-50%) rotate(${cloth.stringAngle}deg)`

      // 应用衣物变换
      cloth.cloth.style.transform = `
                rotate(${cloth.rotation}deg)
                scaleX(${scaleX})
                scaleY(${scaleY})
            `

      // 应用容器位置
      // cloth.container.style.transform = `translateX(${xOffset}px)`
      cloth.container.style.transform = `rotate(${xOffset}deg)`

      const wordData = store.clothWaveWords[index]
      cloth.word.innerHTML = wordData.spell
      cloth.img.src = wordData.pic
      cloth.cloth.wordData = wordData
      cloth.cloth.index = index
    })

    animationId = requestAnimationFrame(animateClothes)
  }

  // 启动
  init()

  // 清理
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId)
  })
})
</script>

<style>
.card-cloth-wave {
}
.clothes-line {
  position: relative;
  /* width: 80%; */
  height: 1px;
  background: #909090;

  /* box-shadow: 0 2px 4px rgba(0,0,0,0.2); */
}

.cloth-container {
  position: absolute;
  transform-origin: 50% 0;
  transition: transform 0.5s ease-out;
}

.clothes-line-string {
  position: absolute;
  width: 1px;
  background: #555;
  opacity: 0.5;
  transform-origin: 50% 0;
}

.cloth {
  position: relative;
  transform-origin: 50% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  /* border: 1px solid rgb(210, 210, 210); */
  img {
    width: 100%;
  }
  font-size: 18px;
  div {
    margin-top: -5px;
  }
}

.control-panel {
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 4px 12px rgba(0,0,0,0.1); */
  width: 80%;
  max-width: 500px;
}

.wind-control {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
/*
button {
    padding: 8px 16px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
} */
</style>
