function calculateSubtotal(input) {
    const row = input.parentElement.parentElement;
    const quantity = parseFloat(input.value) || 0;
    const pricePerUnit = parseFloat(row.querySelector('.price').textContent.replace('$', '')) || 0;
    const subtotal = (quantity * pricePerUnit).toFixed(2);
    row.querySelector('.PriceTotal').textContent = `$${subtotal}`;

    updateTotalSubtotal();
}

function removeRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotalSubtotal();
}

function updateTotalSubtotal() {
    const subtotalElements = document.querySelectorAll('.PriceTotal');
    let totalSubtotal = 0;

    subtotalElements.forEach((subtotalElement) => {
        const subtotal = parseFloat(subtotalElement.textContent.replace('$', '')) || 0;
        totalSubtotal += subtotal;
    });

    document.getElementById('PriceSubTotal').textContent = `$${totalSubtotal.toFixed(2)}`;
}

