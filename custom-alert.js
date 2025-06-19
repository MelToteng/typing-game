export function customAlert(msg) {
  const div = document.createElement('div');

  console.log('Alert', msg);

  const defaultMsg = msg?msg: 'Error: Something went wrong. Please try again.';

  div.id = 'warningAlert';
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  div.style.background = 'rgba(0,0,0,0.9)';
  div.style.color = 'white';
  div.style.border = '2px solid white';
  div.style.padding = '30px';   
  div.style.borderRadius = '10px';
  div.style.fontSize = '20px';
  div.style.textAlign = 'center';
  div.style.display = 'none';
  div.style.zIndex = '1000';
  div.innerHTML = defaultMsg;

  document.body.appendChild(div);
}
