let buttonmenu = document.querySelector(".buttonmenu");
let imagem = document.querySelector(".imagem");
let statmenu= false;

imagem.style.marginLeft = "-330%";

function menuToggle()
{
    if (statmenu == false)
    {
        imagem.style.marginLeft = "auto";
        statmenu =true;
    }else if(statmenu == true)
    {
        imagem.style.marginLeft = "-330%";
        statmenu = false;
    }
}
buttonmenu.onclick = menuToggle;