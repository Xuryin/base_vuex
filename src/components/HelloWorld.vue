<template>
  <div class="hello">
    123 <br>
    {{name}} <br/>
    {{countPlusLocalState}}<br>
    {{reverseName}}<br>

    {{showMsg}} <br>
    <input type="text" v-model="inputName">
    <button @click="changeName(inputName)">修改</button>
    <br>


  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

  /* 只写组件中的script部分 */
  export default {
    computed: {
      countPlusLocalState(state) {
        return this.name + this.age
      },
      ...mapState({
        // 箭头函数可使代码更简练
        name: state => state.name,
        age: state => state.age,
        // 传字符串参数 'count' 等同于 `state => state.count`

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      }),
      ...mapGetters({
        reverseName: 'name',
        reverseAge: 'age',
        showMsg: 'other'
      })
    },
    methods: {
      ...mapMutations({
        changeName: 'SET_NAME',
        changeAge: 'SET_AGE'
      })
    },
    data() {
      return {
        localCount: '+++',
        inputName: '',
        inputName2: '',
        inputage: ''
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
