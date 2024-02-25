

const circleImage = document.createElement('div');
circleImage.style.width="40px"
circleImage.style.height="40px"
circleImage.style.border = `2px solid #041F3E`
circleImage.style.borderRadius="50%"
circleImage.style.display="flex"
circleImage.style.justifyContent="center"
circleImage.style.alignItems="center"
circleImage.style.minWidth = "40px"; 
circleImage.style.maxWidth = "40px"; 
circleImage.style.minHeight = "40px"; 
circleImage.style.maxHeight = "40px"; 



const imageComponent = document.createElement("img");
imageComponent.src = "https://storage.googleapis.com/emeric-logo/download.svg";
imageComponent.alt = "logo";
imageComponent.title = "logo";
imageComponent.style.width = "30px"; 
imageComponent.style.height = "30px";

circleImage.appendChild(imageComponent);

circleImage.style.marginRight="5px"


export default circleImage; 
