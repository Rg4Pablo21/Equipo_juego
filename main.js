// Cargar componentes
document.addEventListener('DOMContentLoaded', function() {
    // Cargar header y footer
    fetch('header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    fetch('footer/ft.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

    // Inicializar login
    initLogin();
});

function initLogin() {
    const loginForm = document.getElementById('loginForm');
    const togglePwd = document.getElementById('togglePwd');
    const forgotPwd = document.getElementById('forgotPwd');
    const loginError = document.getElementById('loginError');
    const loginBtn = document.querySelector('.login-btn');
    const spinner = document.querySelector('.spinner');

    // Mostrar/ocultar contraseña
    if (togglePwd) {
        togglePwd.addEventListener('click', function() {
            const pwdInput = document.getElementById('password');
            const icon = this.querySelector('i');
            
            if (pwdInput.type === 'password') {
                pwdInput.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                pwdInput.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    }

    // Mostrar modal de recuperación
    if (forgotPwd) {
        forgotPwd.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('recovery-modal').style.display = 'block';
            // Cargar contenido de recuperación
            loadRecoveryModal();
        });
    }

    // Enviar formulario
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = this.username.value.trim();
            const password = this.password.value;
            
            // Validación simple
            if (!username || !password) {
                showError('Por favor completa todos los campos');
                return;
            }
            
            // Mostrar loading
            loginBtn.disabled = true;
            spinner.style.display = 'block';
            loginBtn.querySelector('span').style.visibility = 'hidden';
            
            try {
                // Simular retraso de red
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Aquí iría la llamada real al servidor
                const response = await fakeLogin(username, password);
                
                if (response.success) {
                    // Redirigir al dashboard
                    window.location.href = 'dashboard.html';
                } else {
                    showError(response.message);
                }
            } catch (error) {
                console.error('Error:', error);
                showError('Error de conexión con el servidor');
            } finally {
                // Ocultar loading
                loginBtn.disabled = false;
                spinner.style.display = 'none';
                loginBtn.querySelector('span').style.visibility = 'visible';
            }
        });
    }

    function showError(message) {
        loginError.textContent = message;
        loginError.style.display = 'block';
        
        setTimeout(() => {
            loginError.style.display = 'none';
        }, 5000);
    }

    // Función simulada de login
    async function fakeLogin(username, password) {
        // En una implementación real, esto sería una llamada fetch()
        return new Promise(resolve => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin123') {
                    resolve({ success: true });
                } else {
                    resolve({ 
                        success: false, 
                        message: 'Usuario o contraseña incorrectos' 
                    });
                }
            }, 800);
        });
    }
}

function loadRecoveryModal() {
    // Cargar contenido de recuperación desde el módulo correspondiente
    // Esta función sería implementada en recuperacion/contra.js
    console.log('Cargando modal de recuperación...');
}