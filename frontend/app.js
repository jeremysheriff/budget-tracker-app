document.getElementById('transaction-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);

  await fetch('http://localhost:5000/api/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, amount })
  });

  loadTransactions();
});

async function loadTransactions() {
  const res = await fetch('http://localhost:5000/api/transactions');
  const transactions = await res.json();
  const list = document.getElementById('transaction-list');
  list.innerHTML = '';
  transactions.forEach(t => {
    const item = document.createElement('li');
    item.textContent = `${t.description}: $${t.amount}`;
    list.appendChild(item);
  });
}

loadTransactions();