(async function() {
    const originalConsoleError = console.error;
    console.error = function() {
        if (!arguments[0]?.includes?.('Debug')) {
            originalConsoleError.apply(console, arguments);
        }
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    console.log('Iniciando resgate automático');
    
    try {
        await sleep(3000);
        
        const response = await fetch('https://raw.githubusercontent.com/diogolourencodev/genshin-codes/refs/heads/main/codes.txt');
        
        await sleep(3000);
        
        const text = await response.text();
        const codes = text.split('\n').map(code => code.trim()).filter(code => code.length > 0);
        
        console.log(`${codes.length} códigos encontrados`);
        
        await sleep(3000);
        
        for (let i = 0; i < codes.length; i++) {
            try {
                const code = codes[i];
                console.log(`[${i + 1}/${codes.length}] Processando: ${code}`);
                
                await sleep(5000);
                
                const input = document.getElementById('cdkey__code');
                const submitButton = document.querySelector('.cdkey-form__submit');
                
                if (!input || !submitButton) {
                    console.log('Formulário não encontrado, pulando');
                    continue;
                }
                
                await sleep(3000);
                
                input.value = code;
                
                try {
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                } catch (e) {
                    await sleep(5000);
                }
                
                console.log(`Preenchido: ${code}`);
                
                await sleep(3000);
                
                submitButton.click();
                console.log(`Enviado: ${code}`);
                
                console.log('Aguardando 4 segundos antes do próximo código...');
                await sleep(5000);
                
            } catch (error) {
                console.log(`Erro com o código ${code}, continuando...`);
                await sleep(5000);
            }
        }
        
        console.log('Todos os códigos processados');
        
    } catch (error) {
        console.log('Erro geral, continuando...');
    }
})();
