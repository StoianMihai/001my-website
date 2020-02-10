const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleBackdrop() {
    backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
    const text = event.target.dataset.text;
    toggleBackdrop();
    infoModal = document.createElement('div');
    infoModal.classList.add('modal');
    infoModal.innerHTML = `
    <h2>Test Drive</h2>
    
    <div class="formular">

					 		<form action="form.php" type="post" enctype="multipart/form-data">
					 				
					 				<div class="label">Name:</div><div><input name="nume"></div>
					 				
					 				<div class="label">Telephone:</div><div><input name="Telefon"></div>
					 				
					 				<div class="label">Email:</div><div><input name="email"></div>
					 				<div class="label">Type of car</div>
					 				<span>
					 					<select id="preferinte-contact">
					 						<option selected value="model-s">Model S</option>
					 						<option value="model-x">Model X</option>
					 					</select>
					 				</span>
					 				<textarea name="mesaj" placeholder="message"></textarea>
						 				<div class="privacy">I agree with the<a href="legal.html" target="_blank"> Privacy Policy.</a> <input type="checkbox" name="terms-of-service" id="terms"> 
						 				</div>
					 				<button type="submit" value="send">Send</button>



					 			</form>
					 			
					 		</div>
  `;
    const closeButton = document.createElement('button');
    closeButton.addEventListener('click', hideInfoModal);
    closeButton.textContent = 'Close';
    infoModal.appendChild(closeButton);
    document.body.appendChild(infoModal);
}

function hideInfoModal() {
    toggleBackdrop();
    document.body.removeChild(infoModal);
}

for (const linkElement of modalLinkElements) {
    linkElement.addEventListener('click', presentInfoModal);
}

backdropElement.addEventListener('click', hideInfoModal);