# punchBag
A small project where the user has to click on a button to deal damage to a punch bag 
## Objectifs : 
  * Une image du sac est visible ainsi que sa progress bar (les points de vie du sac) 
  * Le but est de frapper le sac (à l'aide d'un bouton “punch”), chaque coup fait perdre 10 PV sur un total de 100 PV 
  * Quand la progress bar est à 0 l'image switch avec le sac usé et le bouton "punch" n'est plus visible 
  * Un bouton rejouer apparait Ne pas oublier l'utilisation des components : 
## Constructions :
###    Un component pour les boutons (punch & restart) 
    renvoient des props que tu transforme en fonctions dans ton main.   
###    Un component pour la progress bar 
    la quantité de la valeur de celle-ci depend d'une valeur liée directement à sa width css.  
###    Un component pour les images
    celui ci contient surement un return conditionnel qui dépend d'un booleen recuperer dans le parent. 

