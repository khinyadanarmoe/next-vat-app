
export function GET(request) {
  
    const {searchParams} = new URL(request.url);
    const rate = 0.07; // Example VAT rate
    const amount = parseFloat(searchParams.get("amount"));
    const vatAmount = amount * rate;
    const totalAmount = amount + vatAmount; 
    return Response.json({ 
        rate, 
        vatAmount, 
        totalAmount 
    });
}


export async function POST(request) {
    const { amount } = await request.json();
    const rate = 0.07; // Example VAT rate
    const vatAmount = amount * rate;
    const totalAmount = amount + vatAmount; 
    return Response.json({ 
        rate, 
        vatAmount, 
        totalAmount 
    });
}