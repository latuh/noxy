import { SapphireClient } from "@sapphire/framework";
import { createClient } from "@supabase/supabase-js";
import { GatewayIntentBits } from "discord.js";

export const supabaseClient = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
);

const client = new SapphireClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(process.env.TOKEN);
