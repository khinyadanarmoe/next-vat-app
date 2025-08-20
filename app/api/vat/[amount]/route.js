export async function GET(request, { params }) {
    const {amount} = parseFloat(params.amount) || 0;
    const vat = +(amount * 0.07).toFixed(2);
    return Response(JSON.stringify({ amount, vat }
    ))
}