const games = []

for(let i=1;i<=120;i++){
games.push({
id:"game"+i,
name:"Web Game "+i,
category:"arcade",
image:"https://picsum.photos/300/200?random="+i,
url:"https://rocketgoal.io/"
})
}

console.log(JSON.stringify(games,null,2))
