async function getB2bSubscriptions() {
    const response = await fetch(process.env.BASE_URL + 'b2b-dashboard/subscriptions', {method: 'GET', headers: {"Authorization": "Bearer" + process.env.TOKEN}});
    console.log(response)
}

getB2bSubscriptions();

