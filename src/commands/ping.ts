import {
	type ApplicationCommandRegistry,
	Command,
	type ChatInputCommand,
} from "@sapphire/framework";
import type { ChatInputCommandInteraction } from "discord.js";

export class PingCommand extends Command {
	public constructor(context: Command.Context, options: Command.Options) {
		super(context, {
			...options,
			name: "ping",
			description: "Replies with Pong!",
		});
	}

	public override registerApplicationCommands(
		registry: ApplicationCommandRegistry,
	) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description),
		);
	}

	public override chatInputRun(
		interaction: ChatInputCommandInteraction,
		context: ChatInputCommand.RunContext,
	) {
		return interaction.reply("Pong!");
	}
}
