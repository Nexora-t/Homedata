
document.getElementById('dataExtractionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value,
        serviceType: "استخراج البيانات",
        website: document.getElementById('target-website').value,
        requirements: document.getElementById('data-required').value,
        timestamp: new Date().toLocaleString()
    };

    // استخدم عنوان URL الخاص بك هنا
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyMK5OWWg0Hx2XEvjoZ8PEet6E2tvFUSP_YXCwM9xi9BzdUIrG4_IJv5qq993HxY2Y/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('تم إرسال طلب استخراج البيانات بنجاح! سنتواصل معك قريبًا.');
            this.reset();
        } else {
            throw new Error('فشل الإرسال');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    });
});
        
