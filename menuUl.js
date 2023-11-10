var menuItem = document.querySelectorAll('.menu') //menuItem guardou todas as classes que possuem a class menu

function selectLink(){ //selectLink é somente o nome que dei para função
    menuItem.forEach((item)=>//  forEach faz uma varredura por todos esses valores(nos arrays/vetores)
        item.classList.remove('ativo')//aqui siginifica que vamos remover uma class 'ativo' do 'item', esse 'item' ta referenciando o '.menu'. Ou seja vai remover de um elemento que eu não cliquei
    )    
    this.classList.add('ativo')//aqui adicioanndo a class ativo em um item que eu cliquei
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)