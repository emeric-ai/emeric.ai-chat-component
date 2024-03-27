
function createCircleImage(){
    const circleImage = document.createElement('div');
    circleImage.style.width="40px"
    circleImage.style.height="40px"
    circleImage.style.border = `2px solid ${window.ChatComponentMainColor}`
    circleImage.style.borderRadius="50%"
    circleImage.style.display="flex"
    circleImage.style.justifyContent="center"
    circleImage.style.alignItems="center"
    circleImage.style.minWidth = "40px"; 
    circleImage.style.maxWidth = "40px"; 
    circleImage.style.minHeight = "40px"; 
    circleImage.style.maxHeight = "40px";
    
    
    
    const imageComponent = document.createElement("img");
    imageComponent.src = window.chatBotPictureURL;
    imageComponent.alt = "logo";
    imageComponent.title = "logo";
    imageComponent.style.width = "30px"; 
    imageComponent.style.height = "30px";
    imageComponent.style.borderRadius="40%"

    circleImage.appendChild(imageComponent);
    
    circleImage.style.marginRight="5px"
    return circleImage
}



export default createCircleImage; 
