import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { amountInCents } = await req.json();

  if (!amountInCents || amountInCents < 50) {
    return NextResponse.json({ error: "Valor inválido." }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Donativo — Cultivar Memórias",
            description: "Apoio ao projeto solidário escolar Cultivar Memórias",
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}?doacao=sucesso`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}?doacao=cancelada`,
  });

  return NextResponse.json({ url: session.url });
}
