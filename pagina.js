let ant = null;

function showData(index)
{
    console.log(ant);
    if(ant != null){
        if(index != ant){
            ant.style.width = "0px";
            ant.style.height = "0px";
            index.style.display = "flex";
            index.style.width = "100%";
            index.style.height = "100%";
            ant = index;
        }
    }
    else{
        index.style.display = "flex";
            index.style.width = "100%";
            index.style.height = "100%";
            ant = index;
    }
    
}