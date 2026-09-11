import {NextResponse} from "next/server";
import {z} from "zod";
import {supabaseAdmin} from "@/lib/supabase";

const schema=z.object({
 asset_type:z.literal("Vehicle"),
 name:z.string().min(2),
 declared_value_inr:z.number().nonnegative(),
 registration_ref:z.string().min(2),
 description:z.string().optional()
});

export async function POST(req:Request){
 try{
  const body=schema.parse(await req.json());
  const code="PL-"+crypto.randomUUID().slice(0,8).toUpperCase();
  const supabase=supabaseAdmin();
  const {data,error}=await supabase.from("assets").insert({
   asset_code:code,asset_type:body.asset_type,name:body.name,
   declared_value_inr:body.declared_value_inr,
   description:body.description??null,
   verification_status:"pending"
  }).select("id,asset_code,verification_status").single();
  if(error) throw error;
  await supabase.from("asset_events").insert({asset_id:data.id,event_type:"asset_created",metadata:{registration_ref:body.registration_ref}});
  return NextResponse.json(data,{status:201});
 }catch(e){return NextResponse.json({error:"Vehicle asset creation failed",detail:String(e)},{status:400});}
}
