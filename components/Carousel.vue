<template>
  <div>
    <div id="app">
      <div id="all">
        <transition-group name="group" tag="ul" id="image">
          <li
            v-for="(item,i) in imagelist"
            v-show="i===index"
            v-bind:key="i"
            :style="{background:item}"
            @mouseenter="stop()"
            @mouseleave="go()"
          >
            <a style href>{{item}}</a>
          </li>
        </transition-group>
        <div id="navChange">
          <ul>
            <li
              v-for="(item,i) in imagelist"
              :key="i"
              :class="{active:i===index}"
              @click="oNavChange(i)"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      index: 1,
      imagelist: ["cornflowerblue", "darkslateblue", "darkgreen", "coral"],
      timer: null
    };
  },
  mounted() {
    this.autoplay()
  },
  methods: {
    leftaround: function() {
      this.index--;
      if (this.index === -1) {
        this.index = 3;
      }
      console.log(this.index);
    },
    rightaround: function() {
      this.index++;
      if (this.index === 4) {
        this.index = 0;
        console.log(this.index);
      }
    },
    autoplay: function() {
      this.timer = setInterval(() => {
        this.index++;
        if (this.index === 4) {
          this.index = 0;
        }
      }, 3000);
    },
    oNavChange: function(i) {
      this.index = i;
    },
    stop:function(){
        clearInterval(this.timer);
        this.timer = null;
    },
    go:function(){
        this.autoplay();
    }
  }
};
</script>
<style lang="css">
#app {
  margin: 0 auto;
}
#all {
  margin: 0 auto;
  width: 800px;
  height: 300px;
  position: relative;
  overflow: hidden;
  /* transition: 1s; */
}
#all ul {
  position: absolute;
  padding: 0;
  width: 3600px;
  height: 300px;
  z-index: 1;
}
#all ul li {
  position: absolute;
  float: left;
  list-style: none;
  width: 800px;
  height: 300px;
  /* transition: 1s; */
}
#all ul li a {
  align-content: center;
  font-size: 36px;
  color: white;
  display: inline-block;
  width: 800px;
  height: 300px;
  /* transition: 1s; */
}
#navChange {
  position: absolute;
  left: 50%;
  top: 90%;
  margin-left: -80px;
  margin-top: -5px;
}
#navChange ul {
  left: 0;
  width: 500px;
  height: 10px;
}
#navChange ul li {
  position: relative;
  width: 10px;
  height: 10px;
  list-style: none;
  background-color: lightblue;
  float: left;
  margin-right: 30px;
  border-radius: 50%;
  transition: 1s;
}
#navChange ul .active {
  width: 50px;
  height: 10px;
  background-color: slategray;
  border-radius: 25px;
  margin-right: 30px;
  transition: 1s;
}
#leftbtn,
#rightbtn {
  width: 100px;
  background: #000;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  height: 80px;
  line-height: 80px;
  position: absolute;
  top: 50%;
  color: #fff;
  z-index: 3;
}
#leftbtn {
  left: 0px;
  /* opacity: 0; */
}
#rightbtn {
  right: 0px;
  /* opacity: 0; */
}
.group-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.group-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.group-enter {
  transform: translateX(100%);
}

.group-leave {
  transform: translateX(0);
}
</style>