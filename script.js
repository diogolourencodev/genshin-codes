(async function() {
    const originalConsoleError = console.error;
    console.error = function() {
        if (!arguments[0]?.includes?.('Debug')) {
            originalConsoleError.apply(console, arguments);
        }
    };

    console.log('🚀 Starting automatic redemption...');
    
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const response = await fetch('https://raw.githubusercontent.com/diogolourencodev/genshin-codes/refs/heads/main/codes.txt');
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const text = await response.text();
        const codes = text.split('\n').map(code => code.trim()).filter(code => code.length > 0);
        
        console.log(`📋 ${codes.length} codes found`);
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        for (let i = 0; i < codes.length; i++) {
            try {
                const code = codes[i];
                console.log(`🔄 [${i + 1}/${codes.length}] Processing: ${code}`);
                
                await new Promise(resolve => setTimeout(resolve, 5000));
                
                const input = document.getElementById('cdkey__code');
                const submitButton = document.querySelector('.cdkey-form__submit');
                
                if (!input || !submitButton) {
                    console.log('⏩ Skipping - form not found');
                    continue;
                }
                
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                input.value = code;
                
                try {
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                } catch (e) {
                    await new Promise(resolve => setTimeout(resolve, 5000))
                }
                
                console.log(`✅ Filled: ${code}`);
                
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // Submit
                submitButton.click();
                console.log(`✅ Submitted: ${code}`);
                
                console.log('⏳ Waiting 4 seconds before next code...');
                await new Promise(resolve => setTimeout(resolve, 5000));
                
            } catch (error) {
                console.log(`⚠️ Error with code ${code}, continuing...`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
        
        console.log('🎉 All codes processed!');
        
    } catch (error) {
        console.log('❌ General error, but continuing...');
    }
})();
