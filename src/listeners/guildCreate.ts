import { Listener } from '@sapphire/framework';
import { stripIndents } from 'common-tags';
import { EmbedBuilder, type Guild } from 'discord.js';

export class GuildCreateListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            event: 'guildCreate',
        });
    }

    public run(guild: Guild): void {
        const message = new EmbedBuilder()
            .setTitle("¡Gracias por añadirme!")
            .setDescription(stripIndents`
                ¡Hola! Soy ${this.container.client.user!.username}, un bot de porras simbólicas. Puedes ver todos mis comandos con \`/ayuda\`.

                Para empezar, puedes crear un grupo con \`/grupo crear\` o unirte a uno con \`/grupo unirse\` y su código de invitación.

                Una vez en un grupo, puedes ver toda la información de este con \`/grupo info\`, y añadir una porra con \`/porras crear\`.

                Puedes listar todas las porras activas del grupo con \`/porras lista\`, y filtrar por activas y finalizadas con la lista de opciones.

                ¡Gracias por añadirme! 🎉
            `)
            .setColor("Blue")
			.setTimestamp();

        if (guild.systemChannel) {
            guild.systemChannel.send({ embeds: [message] });
        } else {
            const textChannel = guild.channels.cache.find(
                (channel) => channel.isTextBased() && channel.permissionsFor(guild.members.me!).has('SendMessages')
            );

            if (textChannel?.isTextBased()) {
                textChannel.send({ embeds: [message] });
            }
        }
    }
}

export default GuildCreateListener;