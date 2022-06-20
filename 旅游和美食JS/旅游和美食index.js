/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-14 20:10:49
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-14 21:10:37
 * @FilePath: \cpx\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 获取box
let boxList=document.querySelectorAll('.box')



// 检测页面滚动
window.addEventListener('scroll',scrollLoad)


//滚动加载函数
function scrollLoad(){
    //定义一个目标值
    
    let taggerValue=window.innerHeight*0.6
   
    //获取每个box距离浏览器顶部的值

    boxList.forEach(box=>{
       let boxTop= box.getBoundingClientRect().top
        if(boxTop<=taggerValue){
            box.classList.add('show-center')
        }else{
            box.classList.remove('show-center')
        }

    })
}