var main=[]=prompt('请输入字符串');
var son=[]=prompt('请输入子链');
var count=0,j,m;
for(let i=0;i<main.length;i++){
    if(main[i]==son[0]){
        m=i+1;
        for(let j=1;j<son.length;j++){
            if(main[m]!=son[j]){
                break;
            }
            m++;
            if(j==son.length-1){
                count++;
            }
        }
    }
}
console.log('子串出现的个数为:'+count);