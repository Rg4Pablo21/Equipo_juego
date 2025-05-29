// Modal de recuperación de contraseña
document.addEventListener('DOMContentLoaded', function() {
    const recoveryModal = document.getElementById('recovery-modal');
    
    if (recoveryModal) {
        // Crear contenido del modal
        recoveryModal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="close-modal">&times;</button>
                    <h2>Recuperar Contraseña</h2>
                    <p>Ingresa tu email para recibir instrucciones</p>
                    <form id="recoveryForm">
                        <div class="form-group">
                            <label for="recoveryEmail">Email:</label>
                            <input type="email" id="recoveryEmail" required>
                        </div>
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>
        `;
        
        // Event listeners
        const closeModal = recoveryModal.querySelector('.close-modal');
        const recoveryForm = recoveryModal.querySelector('#recoveryForm');
        
        closeModal.addEventListener('click', function() {
            recoveryModal.style.display = 'none';
        });
        
        recoveryModal.querySelector('.modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                recoveryModal.style.display = 'none';
            }
        });
        
        if (recoveryForm) {
            recoveryForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const email = this.recoveryEmail.value.trim();
                
                if (!email) {
                    alert('Por favor ingresa tu email');
                    return;
                }
                
                try {
                    // Simular envío
                    const response = await sendRecoveryEmail(email);
                    alert(response.message);
                    recoveryModal.style.display = 'none';
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error al enviar el email');
                }
            });
        }
    }
});

async function sendRecoveryEmail(email) {
    // Simular envío de email
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'Se han enviado instrucciones a tu email'
            });
        }, 1500);
    });
}