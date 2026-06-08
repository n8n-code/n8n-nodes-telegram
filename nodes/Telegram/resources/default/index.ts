import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "POST Add Sticker To Set",
					"value": "POST Add Sticker To Set",
					"action": "POST Add Sticker To Set",
					"description": "Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\\_sticker* or *tgs\\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/addStickerToSet"
						}
					}
				},
				{
					"name": "POST Answer Callback Query",
					"value": "POST Answer Callback Query",
					"action": "POST Answer Callback Query",
					"description": "Use this method to send answers to callback queries sent from [inline keyboards](/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.\n\nAlternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/answerCallbackQuery"
						}
					}
				},
				{
					"name": "POST Answer Inline Query",
					"value": "POST Answer Inline Query",
					"action": "POST Answer Inline Query",
					"description": "Use this method to send answers to an inline query. On success, *True* is returned.  \nNo more than **50** results per query are allowed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/answerInlineQuery"
						}
					}
				},
				{
					"name": "POST Answer Pre Checkout Query",
					"value": "POST Answer Pre Checkout Query",
					"action": "POST Answer Pre Checkout Query",
					"description": "Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\\_checkout\\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/answerPreCheckoutQuery"
						}
					}
				},
				{
					"name": "POST Answer Shipping Query",
					"value": "POST Answer Shipping Query",
					"action": "POST Answer Shipping Query",
					"description": "If you sent an invoice requesting a shipping address and the parameter *is\\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/answerShippingQuery"
						}
					}
				},
				{
					"name": "POST Close",
					"value": "POST Close",
					"action": "POST Close",
					"description": "Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/close"
						}
					}
				},
				{
					"name": "POST Copy Message",
					"value": "POST Copy Message",
					"action": "POST Copy Message",
					"description": "Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/#messageid) of the sent message on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/copyMessage"
						}
					}
				},
				{
					"name": "POST Create New Sticker Set",
					"value": "POST Create New Sticker Set",
					"action": "POST Create New Sticker Set",
					"description": "Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\\_sticker* or *tgs\\_sticker*. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createNewStickerSet"
						}
					}
				},
				{
					"name": "POST Delete Chat Photo",
					"value": "POST Delete Chat Photo",
					"action": "POST Delete Chat Photo",
					"description": "Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteChatPhoto"
						}
					}
				},
				{
					"name": "POST Delete Chat Sticker Set",
					"value": "POST Delete Chat Sticker Set",
					"action": "POST Delete Chat Sticker Set",
					"description": "Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\\_set\\_sticker\\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteChatStickerSet"
						}
					}
				},
				{
					"name": "POST Delete Message",
					"value": "POST Delete Message",
					"action": "POST Delete Message",
					"description": "Use this method to delete a message, including service messages, with the following limitations:  \n\\- A message can only be deleted if it was sent less than 48 hours ago.  \n\\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  \n\\- Bots can delete outgoing messages in private chats, groups, and supergroups.  \n\\- Bots can delete incoming messages in private chats.  \n\\- Bots granted *can\\_post\\_messages* permissions can delete outgoing messages in channels.  \n\\- If the bot is an administrator of a group, it can delete any message there.  \n\\- If the bot has *can\\_delete\\_messages* permission in a supergroup or a channel, it can delete any message there.  \nReturns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteMessage"
						}
					}
				},
				{
					"name": "POST Delete Sticker From Set",
					"value": "POST Delete Sticker From Set",
					"action": "POST Delete Sticker From Set",
					"description": "Use this method to delete a sticker from a set created by the bot. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteStickerFromSet"
						}
					}
				},
				{
					"name": "POST Delete Webhook",
					"value": "POST Delete Webhook",
					"action": "POST Delete Webhook",
					"description": "Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deleteWebhook"
						}
					}
				},
				{
					"name": "POST Edit Message Caption",
					"value": "POST Edit Message Caption",
					"action": "POST Edit Message Caption",
					"description": "Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/editMessageCaption"
						}
					}
				},
				{
					"name": "POST Edit Message Live Location",
					"value": "POST Edit Message Live Location",
					"action": "POST Edit Message Live Location",
					"description": "Use this method to edit live location messages. A location can be edited until its *live\\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/editMessageLiveLocation"
						}
					}
				},
				{
					"name": "POST Edit Message Media",
					"value": "POST Edit Message Media",
					"action": "POST Edit Message Media",
					"description": "Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/editMessageMedia"
						}
					}
				},
				{
					"name": "POST Edit Message Reply Markup",
					"value": "POST Edit Message Reply Markup",
					"action": "POST Edit Message Reply Markup",
					"description": "Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/editMessageReplyMarkup"
						}
					}
				},
				{
					"name": "POST Edit Message Text",
					"value": "POST Edit Message Text",
					"action": "POST Edit Message Text",
					"description": "Use this method to edit text and [game](https://core.telegram.org/bots/api/#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/editMessageText"
						}
					}
				},
				{
					"name": "POST Export Chat Invite Link",
					"value": "POST Export Chat Invite Link",
					"action": "POST Export Chat Invite Link",
					"description": "Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/exportChatInviteLink"
						}
					}
				},
				{
					"name": "POST Forward Message",
					"value": "POST Forward Message",
					"action": "POST Forward Message",
					"description": "Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/forwardMessage"
						}
					}
				},
				{
					"name": "POST Get Chat",
					"value": "POST Get Chat",
					"action": "POST Get Chat",
					"description": "Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChat"
						}
					}
				},
				{
					"name": "POST Get Chat Administrators",
					"value": "POST Get Chat Administrators",
					"action": "POST Get Chat Administrators",
					"description": "Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChatAdministrators"
						}
					}
				},
				{
					"name": "POST Get Chat Member",
					"value": "POST Get Chat Member",
					"action": "POST Get Chat Member",
					"description": "Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChatMember"
						}
					}
				},
				{
					"name": "POST Get Chat Members Count",
					"value": "POST Get Chat Members Count",
					"action": "POST Get Chat Members Count",
					"description": "Use this method to get the number of members in a chat. Returns *Int* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getChatMembersCount"
						}
					}
				},
				{
					"name": "POST Get File",
					"value": "POST Get File",
					"action": "POST Get File",
					"description": "Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getFile"
						}
					}
				},
				{
					"name": "POST Get Game High Scores",
					"value": "POST Get Game High Scores",
					"action": "POST Get Game High Scores",
					"description": "Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects.\n\nThis method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getGameHighScores"
						}
					}
				},
				{
					"name": "POST Get Me",
					"value": "POST Get Me",
					"action": "POST Get Me",
					"description": "A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getMe"
						}
					}
				},
				{
					"name": "POST Get My Commands",
					"value": "POST Get My Commands",
					"action": "POST Get My Commands",
					"description": "Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getMyCommands"
						}
					}
				},
				{
					"name": "POST Get Sticker Set",
					"value": "POST Get Sticker Set",
					"action": "POST Get Sticker Set",
					"description": "Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getStickerSet"
						}
					}
				},
				{
					"name": "POST Get Updates",
					"value": "POST Get Updates",
					"action": "POST Get Updates",
					"description": "Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getUpdates"
						}
					}
				},
				{
					"name": "POST Get User Profile Photos",
					"value": "POST Get User Profile Photos",
					"action": "POST Get User Profile Photos",
					"description": "Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getUserProfilePhotos"
						}
					}
				},
				{
					"name": "POST Get Webhook Info",
					"value": "POST Get Webhook Info",
					"action": "POST Get Webhook Info",
					"description": "Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getWebhookInfo"
						}
					}
				},
				{
					"name": "POST Kick Chat Member",
					"value": "POST Kick Chat Member",
					"action": "POST Kick Chat Member",
					"description": "Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kickChatMember"
						}
					}
				},
				{
					"name": "POST Leave Chat",
					"value": "POST Leave Chat",
					"action": "POST Leave Chat",
					"description": "Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/leaveChat"
						}
					}
				},
				{
					"name": "POST Log Out",
					"value": "POST Log Out",
					"action": "POST Log Out",
					"description": "Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/logOut"
						}
					}
				},
				{
					"name": "POST Pin Chat Message",
					"value": "POST Pin Chat Message",
					"action": "POST Pin Chat Message",
					"description": "Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pinChatMessage"
						}
					}
				},
				{
					"name": "POST Promote Chat Member",
					"value": "POST Promote Chat Member",
					"action": "POST Promote Chat Member",
					"description": "Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/promoteChatMember"
						}
					}
				},
				{
					"name": "POST Restrict Chat Member",
					"value": "POST Restrict Chat Member",
					"action": "POST Restrict Chat Member",
					"description": "Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restrictChatMember"
						}
					}
				},
				{
					"name": "POST Send Animation",
					"value": "POST Send Animation",
					"action": "POST Send Animation",
					"description": "Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendAnimation"
						}
					}
				},
				{
					"name": "POST Send Audio",
					"value": "POST Send Audio",
					"action": "POST Send Audio",
					"description": "Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.\n\nFor sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/#sendvoice) method instead.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendAudio"
						}
					}
				},
				{
					"name": "POST Send Chat Action",
					"value": "POST Send Chat Action",
					"action": "POST Send Chat Action",
					"description": "Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.\n\nExample: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/#sendchataction) with *action* = *upload\\_photo*. The user will see a “sending photo” status for the bot.\n\nWe only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendChatAction"
						}
					}
				},
				{
					"name": "POST Send Contact",
					"value": "POST Send Contact",
					"action": "POST Send Contact",
					"description": "Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendContact"
						}
					}
				},
				{
					"name": "POST Send Dice",
					"value": "POST Send Dice",
					"action": "POST Send Dice",
					"description": "Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendDice"
						}
					}
				},
				{
					"name": "POST Send Document",
					"value": "POST Send Document",
					"action": "POST Send Document",
					"description": "Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendDocument"
						}
					}
				},
				{
					"name": "POST Send Game",
					"value": "POST Send Game",
					"action": "POST Send Game",
					"description": "Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendGame"
						}
					}
				},
				{
					"name": "POST Send Invoice",
					"value": "POST Send Invoice",
					"action": "POST Send Invoice",
					"description": "Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendInvoice"
						}
					}
				},
				{
					"name": "POST Send Location",
					"value": "POST Send Location",
					"action": "POST Send Location",
					"description": "Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendLocation"
						}
					}
				},
				{
					"name": "POST Send Media Group",
					"value": "POST Send Media Group",
					"action": "POST Send Media Group",
					"description": "Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendMediaGroup"
						}
					}
				},
				{
					"name": "POST Send Message",
					"value": "POST Send Message",
					"action": "POST Send Message",
					"description": "Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendMessage"
						}
					}
				},
				{
					"name": "POST Send Photo",
					"value": "POST Send Photo",
					"action": "POST Send Photo",
					"description": "Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendPhoto"
						}
					}
				},
				{
					"name": "POST Send Poll",
					"value": "POST Send Poll",
					"action": "POST Send Poll",
					"description": "Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendPoll"
						}
					}
				},
				{
					"name": "POST Send Sticker",
					"value": "POST Send Sticker",
					"action": "POST Send Sticker",
					"description": "Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendSticker"
						}
					}
				},
				{
					"name": "POST Send Venue",
					"value": "POST Send Venue",
					"action": "POST Send Venue",
					"description": "Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendVenue"
						}
					}
				},
				{
					"name": "POST Send Video",
					"value": "POST Send Video",
					"action": "POST Send Video",
					"description": "Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendVideo"
						}
					}
				},
				{
					"name": "POST Send Video Note",
					"value": "POST Send Video Note",
					"action": "POST Send Video Note",
					"description": "As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendVideoNote"
						}
					}
				},
				{
					"name": "POST Send Voice",
					"value": "POST Send Voice",
					"action": "POST Send Voice",
					"description": "Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/#audio) or [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendVoice"
						}
					}
				},
				{
					"name": "POST Set Chat Administrator Custom Title",
					"value": "POST Set Chat Administrator Custom Title",
					"action": "POST Set Chat Administrator Custom Title",
					"description": "Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatAdministratorCustomTitle"
						}
					}
				},
				{
					"name": "POST Set Chat Description",
					"value": "POST Set Chat Description",
					"action": "POST Set Chat Description",
					"description": "Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatDescription"
						}
					}
				},
				{
					"name": "POST Set Chat Permissions",
					"value": "POST Set Chat Permissions",
					"action": "POST Set Chat Permissions",
					"description": "Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\\_restrict\\_members* admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatPermissions"
						}
					}
				},
				{
					"name": "POST Set Chat Photo",
					"value": "POST Set Chat Photo",
					"action": "POST Set Chat Photo",
					"description": "Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatPhoto"
						}
					}
				},
				{
					"name": "POST Set Chat Sticker Set",
					"value": "POST Set Chat Sticker Set",
					"action": "POST Set Chat Sticker Set",
					"description": "Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\\_set\\_sticker\\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatStickerSet"
						}
					}
				},
				{
					"name": "POST Set Chat Title",
					"value": "POST Set Chat Title",
					"action": "POST Set Chat Title",
					"description": "Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setChatTitle"
						}
					}
				},
				{
					"name": "POST Set Game Score",
					"value": "POST Set Game Score",
					"action": "POST Set Game Score",
					"description": "Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setGameScore"
						}
					}
				},
				{
					"name": "POST Set My Commands",
					"value": "POST Set My Commands",
					"action": "POST Set My Commands",
					"description": "Use this method to change the list of the bot's commands. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setMyCommands"
						}
					}
				},
				{
					"name": "POST Set Passport Data Errors",
					"value": "POST Set Passport Data Errors",
					"action": "POST Set Passport Data Errors",
					"description": "Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.\n\nUse this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setPassportDataErrors"
						}
					}
				},
				{
					"name": "POST Set Sticker Position In Set",
					"value": "POST Set Sticker Position In Set",
					"action": "POST Set Sticker Position In Set",
					"description": "Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setStickerPositionInSet"
						}
					}
				},
				{
					"name": "POST Set Sticker Set Thumb",
					"value": "POST Set Sticker Set Thumb",
					"action": "POST Set Sticker Set Thumb",
					"description": "Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setStickerSetThumb"
						}
					}
				},
				{
					"name": "POST Set Webhook",
					"value": "POST Set Webhook",
					"action": "POST Set Webhook",
					"description": "Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api/#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.\n\nIf you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setWebhook"
						}
					}
				},
				{
					"name": "POST Stop Message Live Location",
					"value": "POST Stop Message Live Location",
					"action": "POST Stop Message Live Location",
					"description": "Use this method to stop updating a live location message before *live\\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stopMessageLiveLocation"
						}
					}
				},
				{
					"name": "POST Stop Poll",
					"value": "POST Stop Poll",
					"action": "POST Stop Poll",
					"description": "Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stopPoll"
						}
					}
				},
				{
					"name": "POST Unban Chat Member",
					"value": "POST Unban Chat Member",
					"action": "POST Unban Chat Member",
					"description": "Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\\_if\\_banned*. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/unbanChatMember"
						}
					}
				},
				{
					"name": "POST Unpin All Chat Messages",
					"value": "POST Unpin All Chat Messages",
					"action": "POST Unpin All Chat Messages",
					"description": "Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/unpinAllChatMessages"
						}
					}
				},
				{
					"name": "POST Unpin Chat Message",
					"value": "POST Unpin Chat Message",
					"action": "POST Unpin Chat Message",
					"description": "Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/unpinChatMessage"
						}
					}
				},
				{
					"name": "POST Upload Sticker File",
					"value": "POST Upload Sticker File",
					"action": "POST Upload Sticker File",
					"description": "Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/uploadStickerFile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /addStickerToSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Add Sticker To Set"
					]
				}
			}
		},
		{
			"displayName": "POST /addStickerToSet<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Add Sticker To Set"
					]
				}
			}
		},
		{
			"displayName": "POST /answerCallbackQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"displayName": "Cache Time",
			"name": "cache_time",
			"type": "number",
			"default": 0,
			"description": "The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.",
			"routing": {
				"send": {
					"property": "cache_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Callback Query Id",
			"name": "callback_query_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the query to be answered",
			"routing": {
				"send": {
					"property": "callback_query_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"displayName": "Show Alert",
			"name": "show_alert",
			"type": "boolean",
			"default": false,
			"description": "If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*.",
			"routing": {
				"send": {
					"property": "show_alert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api/#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game — note that this will only work if the query comes from a [*callback\\_game*](https://core.telegram.org/bots/api/#inlinekeyboardbutton) button.  \n\nOtherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Callback Query"
					]
				}
			}
		},
		{
			"displayName": "POST /answerInlineQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "Cache Time",
			"name": "cache_time",
			"type": "number",
			"default": 300,
			"description": "The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.",
			"routing": {
				"send": {
					"property": "cache_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Inline Query Id",
			"name": "inline_query_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the answered query",
			"routing": {
				"send": {
					"property": "inline_query_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "Is Personal",
			"name": "is_personal",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query",
			"routing": {
				"send": {
					"property": "is_personal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "Next Offset",
			"name": "next_offset",
			"type": "string",
			"default": "",
			"description": "Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.",
			"routing": {
				"send": {
					"property": "next_offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Results",
			"name": "results",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON-serialized array of results for the inline query",
			"routing": {
				"send": {
					"property": "results",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "Switch Pm Parameter",
			"name": "switch_pm_parameter",
			"type": "string",
			"default": "",
			"description": "[Deep-linking](/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.  \n\n*Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [*switch\\_inline*](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.",
			"routing": {
				"send": {
					"property": "switch_pm_parameter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "Switch Pm Text",
			"name": "switch_pm_text",
			"type": "string",
			"default": "",
			"description": "If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch\\_pm\\_parameter*",
			"routing": {
				"send": {
					"property": "switch_pm_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Inline Query"
					]
				}
			}
		},
		{
			"displayName": "POST /answerPreCheckoutQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Pre Checkout Query"
					]
				}
			}
		},
		{
			"displayName": "Error Message",
			"name": "error_message",
			"type": "string",
			"default": "",
			"description": "Required if *ok* is *False*. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. \"Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!\"). Telegram will display this message to the user.",
			"routing": {
				"send": {
					"property": "error_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Pre Checkout Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ok",
			"name": "ok",
			"type": "boolean",
			"default": true,
			"description": "Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems.",
			"routing": {
				"send": {
					"property": "ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Pre Checkout Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Pre Checkout Query Id",
			"name": "pre_checkout_query_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the query to be answered",
			"routing": {
				"send": {
					"property": "pre_checkout_query_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Pre Checkout Query"
					]
				}
			}
		},
		{
			"displayName": "POST /answerShippingQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Shipping Query"
					]
				}
			}
		},
		{
			"displayName": "Error Message",
			"name": "error_message",
			"type": "string",
			"default": "",
			"description": "Required if *ok* is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. \"Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.",
			"routing": {
				"send": {
					"property": "error_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Shipping Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ok",
			"name": "ok",
			"type": "boolean",
			"default": true,
			"description": "Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)",
			"routing": {
				"send": {
					"property": "ok",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Shipping Query"
					]
				}
			}
		},
		{
			"displayName": "Shipping Options",
			"name": "shipping_options",
			"type": "json",
			"default": "[\n  {\n    \"prices\": [\n      {}\n    ]\n  }\n]",
			"description": "Required if *ok* is True. A JSON-serialized array of available shipping options.",
			"routing": {
				"send": {
					"property": "shipping_options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Shipping Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shipping Query Id",
			"name": "shipping_query_id",
			"type": "string",
			"default": "",
			"description": "Unique identifier for the query to be answered",
			"routing": {
				"send": {
					"property": "shipping_query_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Answer Shipping Query"
					]
				}
			}
		},
		{
			"displayName": "POST /close",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Close"
					]
				}
			}
		},
		{
			"displayName": "POST /copyMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Caption",
			"name": "caption",
			"type": "string",
			"default": "",
			"description": "New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept",
			"routing": {
				"send": {
					"property": "caption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Caption Entities",
			"name": "caption_entities",
			"type": "json",
			"default": "[\n  {\n    \"user\": {}\n  }\n]",
			"description": "List of special entities that appear in the new caption, which can be specified instead of *parse\\_mode*",
			"routing": {
				"send": {
					"property": "caption_entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Chat Id",
			"name": "from_chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "from_chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Message identifier in the chat specified in *from\\_chat\\_id*",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Parse Mode",
			"name": "parse_mode",
			"type": "string",
			"default": "",
			"description": "Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.",
			"routing": {
				"send": {
					"property": "parse_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Copy Message"
					]
				}
			}
		},
		{
			"displayName": "POST /createNewStickerSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create New Sticker Set"
					]
				}
			}
		},
		{
			"displayName": "POST /createNewStickerSet<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Create New Sticker Set"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteChatPhoto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Chat Photo"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Chat Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteChatStickerSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Chat Sticker Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Chat Sticker Set"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Identifier of the message to delete",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Message"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteStickerFromSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Sticker From Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sticker",
			"name": "sticker",
			"type": "string",
			"default": "",
			"description": "File identifier of the sticker",
			"routing": {
				"send": {
					"property": "sticker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Sticker From Set"
					]
				}
			}
		},
		{
			"displayName": "POST /deleteWebhook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "Drop Pending Updates",
			"name": "drop_pending_updates",
			"type": "boolean",
			"default": true,
			"description": "Pass *True* to drop all pending updates",
			"routing": {
				"send": {
					"property": "drop_pending_updates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Delete Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageCaption",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Caption",
			"name": "caption",
			"type": "string",
			"default": "",
			"description": "New caption of the message, 0-1024 characters after entities parsing",
			"routing": {
				"send": {
					"property": "caption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Caption Entities",
			"name": "caption_entities",
			"type": "json",
			"default": "[\n  {\n    \"user\": {}\n  }\n]",
			"description": "List of special entities that appear in the caption, which can be specified instead of *parse\\_mode*",
			"routing": {
				"send": {
					"property": "caption_entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Parse Mode",
			"name": "parse_mode",
			"type": "string",
			"default": "",
			"description": "Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.",
			"routing": {
				"send": {
					"property": "parse_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Caption"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageLiveLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Heading",
			"name": "heading",
			"type": "number",
			"default": 0,
			"description": "Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
			"routing": {
				"send": {
					"property": "heading",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Horizontal Accuracy",
			"name": "horizontal_accuracy",
			"type": "number",
			"default": 0,
			"description": "The radius of uncertainty for the location, measured in meters; 0-1500",
			"routing": {
				"send": {
					"property": "horizontal_accuracy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Latitude",
			"name": "latitude",
			"type": "number",
			"default": 0,
			"description": "Latitude of new location",
			"routing": {
				"send": {
					"property": "latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Longitude",
			"name": "longitude",
			"type": "number",
			"default": 0,
			"description": "Longitude of new location",
			"routing": {
				"send": {
					"property": "longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Proximity Alert Radius",
			"name": "proximity_alert_radius",
			"type": "number",
			"default": 0,
			"description": "Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
			"routing": {
				"send": {
					"property": "proximity_alert_radius",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageMedia",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Media"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageMedia<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Media"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageReplyMarkup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Reply Markup"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Reply Markup"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Reply Markup"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Reply Markup"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Reply Markup"
					]
				}
			}
		},
		{
			"displayName": "POST /editMessageText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Disable Web Page Preview",
			"name": "disable_web_page_preview",
			"type": "boolean",
			"default": true,
			"description": "Disables link previews for links in this message",
			"routing": {
				"send": {
					"property": "disable_web_page_preview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Entities",
			"name": "entities",
			"type": "json",
			"default": "[\n  {\n    \"user\": {}\n  }\n]",
			"description": "List of special entities that appear in message text, which can be specified instead of *parse\\_mode*",
			"routing": {
				"send": {
					"property": "entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Parse Mode",
			"name": "parse_mode",
			"type": "string",
			"default": "",
			"description": "Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.",
			"routing": {
				"send": {
					"property": "parse_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "New text of the message, 1-4096 characters after entities parsing",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Edit Message Text"
					]
				}
			}
		},
		{
			"displayName": "POST /exportChatInviteLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Export Chat Invite Link"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Export Chat Invite Link"
					]
				}
			}
		},
		{
			"displayName": "POST /forwardMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Forward Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Forward Message"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Forward Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Chat Id",
			"name": "from_chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "from_chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Forward Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Message identifier in the chat specified in *from\\_chat\\_id*",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Forward Message"
					]
				}
			}
		},
		{
			"displayName": "POST /getChat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat"
					]
				}
			}
		},
		{
			"displayName": "POST /getChatAdministrators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Administrators"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Administrators"
					]
				}
			}
		},
		{
			"displayName": "POST /getChatMember",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Member"
					]
				}
			}
		},
		{
			"displayName": "POST /getChatMembersCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Members Count"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Chat Members Count"
					]
				}
			}
		},
		{
			"displayName": "POST /getFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get File"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File Id",
			"name": "file_id",
			"type": "string",
			"default": "",
			"description": "File identifier to get info about",
			"routing": {
				"send": {
					"property": "file_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get File"
					]
				}
			}
		},
		{
			"displayName": "POST /getGameHighScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Game High Scores"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Unique identifier for the target chat",
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Game High Scores"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Game High Scores"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the sent message",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Game High Scores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Target user id",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Game High Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /getMe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Me"
					]
				}
			}
		},
		{
			"displayName": "POST /getMyCommands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get My Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /getStickerSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Sticker Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the sticker set",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Sticker Set"
					]
				}
			}
		},
		{
			"displayName": "POST /getUpdates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Allowed Updates",
			"name": "allowed_updates",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\\_channel\\_post”, “callback\\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.  \n\nPlease note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.",
			"routing": {
				"send": {
					"property": "allowed_updates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 100,
			"description": "Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.",
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"type": "number",
			"default": 0,
			"description": "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api/#getupdates) is called with an *offset* higher than its *update\\_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten.",
			"routing": {
				"send": {
					"property": "offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 0,
			"description": "Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Updates"
					]
				}
			}
		},
		{
			"displayName": "POST /getUserProfilePhotos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get User Profile Photos"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 100,
			"description": "Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.",
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get User Profile Photos"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"type": "number",
			"default": 0,
			"description": "Sequential number of the first photo to be returned. By default, all photos are returned.",
			"routing": {
				"send": {
					"property": "offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get User Profile Photos"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get User Profile Photos"
					]
				}
			}
		},
		{
			"displayName": "POST /getWebhookInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Get Webhook Info"
					]
				}
			}
		},
		{
			"displayName": "POST /kickChatMember",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Kick Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Kick Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Until Date",
			"name": "until_date",
			"type": "number",
			"default": 0,
			"description": "Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever",
			"routing": {
				"send": {
					"property": "until_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Kick Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Kick Chat Member"
					]
				}
			}
		},
		{
			"displayName": "POST /leaveChat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Leave Chat"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Leave Chat"
					]
				}
			}
		},
		{
			"displayName": "POST /logOut",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Log Out"
					]
				}
			}
		},
		{
			"displayName": "POST /pinChatMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Pin Chat Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Pin Chat Message"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Pin Chat Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Identifier of a message to pin",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Pin Chat Message"
					]
				}
			}
		},
		{
			"displayName": "POST /promoteChatMember",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Change Info",
			"name": "can_change_info",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can change chat title, photo and other settings",
			"routing": {
				"send": {
					"property": "can_change_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Delete Messages",
			"name": "can_delete_messages",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can delete messages of other users",
			"routing": {
				"send": {
					"property": "can_delete_messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Edit Messages",
			"name": "can_edit_messages",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can edit messages of other users and can pin messages, channels only",
			"routing": {
				"send": {
					"property": "can_edit_messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Invite Users",
			"name": "can_invite_users",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can invite new users to the chat",
			"routing": {
				"send": {
					"property": "can_invite_users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Pin Messages",
			"name": "can_pin_messages",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can pin messages, supergroups only",
			"routing": {
				"send": {
					"property": "can_pin_messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Post Messages",
			"name": "can_post_messages",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can create channel posts, channels only",
			"routing": {
				"send": {
					"property": "can_post_messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Promote Members",
			"name": "can_promote_members",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)",
			"routing": {
				"send": {
					"property": "can_promote_members",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Can Restrict Members",
			"name": "can_restrict_members",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the administrator can restrict, ban or unban chat members",
			"routing": {
				"send": {
					"property": "can_restrict_members",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Is Anonymous",
			"name": "is_anonymous",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the administrator's presence in the chat is hidden",
			"routing": {
				"send": {
					"property": "is_anonymous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Promote Chat Member"
					]
				}
			}
		},
		{
			"displayName": "POST /restrictChatMember",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Restrict Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Restrict Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "{}",
			"description": "Describes actions that a non-administrator user is allowed to take in a chat.",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Restrict Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Until Date",
			"name": "until_date",
			"type": "number",
			"default": 0,
			"description": "Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever",
			"routing": {
				"send": {
					"property": "until_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Restrict Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Restrict Chat Member"
					]
				}
			}
		},
		{
			"displayName": "POST /sendAnimation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Animation"
					]
				}
			}
		},
		{
			"displayName": "POST /sendAnimation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Animation"
					]
				}
			}
		},
		{
			"displayName": "POST /sendAudio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /sendAudio<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /sendChatAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Chat Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "string",
			"default": "",
			"description": "Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\\_video* or *upload\\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\\_voice* or *upload\\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\\_video\\_note* or *upload\\_video\\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote).",
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Chat Action"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Chat Action"
					]
				}
			}
		},
		{
			"displayName": "POST /sendContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"description": "Contact's first name",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"description": "Contact's last name",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "",
			"description": "Contact's phone number",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "Vcard",
			"name": "vcard",
			"type": "string",
			"default": "",
			"description": "Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes",
			"routing": {
				"send": {
					"property": "vcard",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Contact"
					]
				}
			}
		},
		{
			"displayName": "POST /sendDice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "Emoji",
			"name": "emoji",
			"type": "options",
			"default": "🎲",
			"description": "Emoji on which the dice throw animation is based. Currently, must be one of “<img alt=\"🎲\" src=\"//telegram.org/img/emoji/40/F09F8EB2.png\" height=\"20\" width=\"20\" />”, “<img alt=\"🎯\" src=\"//telegram.org/img/emoji/40/F09F8EAF.png\" height=\"20\" width=\"20\" />”, “<img alt=\"🏀\" src=\"//telegram.org/img/emoji/40/F09F8F80.png\" height=\"20\" width=\"20\" />”, “<img alt=\"⚽\" src=\"//telegram.org/img/emoji/40/E29ABD.png\" height=\"20\" width=\"20\" />”, or “<img alt=\"🎰\" src=\"//telegram.org/img/emoji/40/F09F8EB0.png\" height=\"20\" width=\"20\" />”. Dice can have values 1-6 for “<img alt=\"🎲\" src=\"//telegram.org/img/emoji/40/F09F8EB2.png\" height=\"20\" width=\"20\" />” and “<img alt=\"🎯\" src=\"//telegram.org/img/emoji/40/F09F8EAF.png\" height=\"20\" width=\"20\" />”, values 1-5 for “<img alt=\"🏀\" src=\"//telegram.org/img/emoji/40/F09F8F80.png\" height=\"20\" width=\"20\" />” and “<img alt=\"⚽\" src=\"//telegram.org/img/emoji/40/E29ABD.png\" height=\"20\" width=\"20\" />”, and values 1-64 for “<img alt=\"🎰\" src=\"//telegram.org/img/emoji/40/F09F8EB0.png\" height=\"20\" width=\"20\" />”. Defaults to “<img alt=\"🎲\" src=\"//telegram.org/img/emoji/40/F09F8EB2.png\" height=\"20\" width=\"20\" />”",
			"options": [
				{
					"name": "🎲",
					"value": "🎲"
				},
				{
					"name": "🎯",
					"value": "🎯"
				},
				{
					"name": "🏀",
					"value": "🏀"
				},
				{
					"name": "⚽",
					"value": "⚽"
				},
				{
					"name": "🎰",
					"value": "🎰"
				}
			],
			"routing": {
				"send": {
					"property": "emoji",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Dice"
					]
				}
			}
		},
		{
			"displayName": "POST /sendDocument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Document"
					]
				}
			}
		},
		{
			"displayName": "POST /sendDocument<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Document"
					]
				}
			}
		},
		{
			"displayName": "POST /sendGame",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier for the target chat",
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Game Short Name",
			"name": "game_short_name",
			"type": "string",
			"default": "",
			"description": "Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).",
			"routing": {
				"send": {
					"property": "game_short_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Game"
					]
				}
			}
		},
		{
			"displayName": "POST /sendInvoice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier for the target private chat",
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "",
			"description": "Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies)",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Product description, 1-255 characters",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Is Flexible",
			"name": "is_flexible",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the final price depends on the shipping method",
			"routing": {
				"send": {
					"property": "is_flexible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Need Email",
			"name": "need_email",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if you require the user's email address to complete the order",
			"routing": {
				"send": {
					"property": "need_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Need Name",
			"name": "need_name",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if you require the user's full name to complete the order",
			"routing": {
				"send": {
					"property": "need_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Need Phone Number",
			"name": "need_phone_number",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if you require the user's phone number to complete the order",
			"routing": {
				"send": {
					"property": "need_phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Need Shipping Address",
			"name": "need_shipping_address",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if you require the user's shipping address to complete the order",
			"routing": {
				"send": {
					"property": "need_shipping_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "",
			"description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Photo Height",
			"name": "photo_height",
			"type": "number",
			"default": 0,
			"description": "Photo height",
			"routing": {
				"send": {
					"property": "photo_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Photo Size",
			"name": "photo_size",
			"type": "number",
			"default": 0,
			"description": "Photo size",
			"routing": {
				"send": {
					"property": "photo_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Photo Url",
			"name": "photo_url",
			"type": "string",
			"default": "",
			"description": "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Photo Width",
			"name": "photo_width",
			"type": "number",
			"default": 0,
			"description": "Photo width",
			"routing": {
				"send": {
					"property": "photo_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Prices",
			"name": "prices",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)",
			"routing": {
				"send": {
					"property": "prices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Provider Data",
			"name": "provider_data",
			"type": "string",
			"default": "",
			"description": "A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.",
			"routing": {
				"send": {
					"property": "provider_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider Token",
			"name": "provider_token",
			"type": "string",
			"default": "",
			"description": "Payments provider token, obtained via [Botfather](https://t.me/botfather)",
			"routing": {
				"send": {
					"property": "provider_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Send Email To Provider",
			"name": "send_email_to_provider",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if user's email address should be sent to provider",
			"routing": {
				"send": {
					"property": "send_email_to_provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "Send Phone Number To Provider",
			"name": "send_phone_number_to_provider",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if user's phone number should be sent to provider",
			"routing": {
				"send": {
					"property": "send_phone_number_to_provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Parameter",
			"name": "start_parameter",
			"type": "string",
			"default": "",
			"description": "Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter",
			"routing": {
				"send": {
					"property": "start_parameter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Product name, 1-32 characters",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Invoice"
					]
				}
			}
		},
		{
			"displayName": "POST /sendLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Heading",
			"name": "heading",
			"type": "number",
			"default": 0,
			"description": "For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.",
			"routing": {
				"send": {
					"property": "heading",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Horizontal Accuracy",
			"name": "horizontal_accuracy",
			"type": "number",
			"default": 0,
			"description": "The radius of uncertainty for the location, measured in meters; 0-1500",
			"routing": {
				"send": {
					"property": "horizontal_accuracy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Latitude",
			"name": "latitude",
			"type": "number",
			"default": 0,
			"description": "Latitude of the location",
			"routing": {
				"send": {
					"property": "latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Live Period",
			"name": "live_period",
			"type": "number",
			"default": 0,
			"description": "Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400.",
			"routing": {
				"send": {
					"property": "live_period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Longitude",
			"name": "longitude",
			"type": "number",
			"default": 0,
			"description": "Longitude of the location",
			"routing": {
				"send": {
					"property": "longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Proximity Alert Radius",
			"name": "proximity_alert_radius",
			"type": "number",
			"default": 0,
			"description": "For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.",
			"routing": {
				"send": {
					"property": "proximity_alert_radius",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Location"
					]
				}
			}
		},
		{
			"displayName": "POST /sendMediaGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Media Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sendMediaGroup<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Media Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sendMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Disable Web Page Preview",
			"name": "disable_web_page_preview",
			"type": "boolean",
			"default": true,
			"description": "Disables link previews for links in this message",
			"routing": {
				"send": {
					"property": "disable_web_page_preview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Entities",
			"name": "entities",
			"type": "json",
			"default": "[\n  {\n    \"user\": {}\n  }\n]",
			"description": "List of special entities that appear in message text, which can be specified instead of *parse\\_mode*",
			"routing": {
				"send": {
					"property": "entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Parse Mode",
			"name": "parse_mode",
			"type": "string",
			"default": "",
			"description": "Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.",
			"routing": {
				"send": {
					"property": "parse_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "Text of the message to be sent, 1-4096 characters after entities parsing",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Message"
					]
				}
			}
		},
		{
			"displayName": "POST /sendPhoto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /sendPhoto<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /sendPoll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Allows Multiple Answers",
			"name": "allows_multiple_answers",
			"type": "boolean",
			"default": true,
			"description": "True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False*",
			"routing": {
				"send": {
					"property": "allows_multiple_answers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Close Date",
			"name": "close_date",
			"type": "number",
			"default": 0,
			"description": "Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with *open\\_period*.",
			"routing": {
				"send": {
					"property": "close_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Correct Option Id",
			"name": "correct_option_id",
			"type": "number",
			"default": 0,
			"description": "0-based identifier of the correct answer option, required for polls in quiz mode",
			"routing": {
				"send": {
					"property": "correct_option_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Explanation",
			"name": "explanation",
			"type": "string",
			"default": "",
			"description": "Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing",
			"routing": {
				"send": {
					"property": "explanation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Explanation Entities",
			"name": "explanation_entities",
			"type": "json",
			"default": "[\n  {\n    \"user\": {}\n  }\n]",
			"description": "List of special entities that appear in the poll explanation, which can be specified instead of *parse\\_mode*",
			"routing": {
				"send": {
					"property": "explanation_entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Explanation Parse Mode",
			"name": "explanation_parse_mode",
			"type": "string",
			"default": "",
			"description": "Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.",
			"routing": {
				"send": {
					"property": "explanation_parse_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Is Anonymous",
			"name": "is_anonymous",
			"type": "boolean",
			"default": true,
			"description": "True, if the poll needs to be anonymous, defaults to *True*",
			"routing": {
				"send": {
					"property": "is_anonymous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Is Closed",
			"name": "is_closed",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview.",
			"routing": {
				"send": {
					"property": "is_closed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Open Period",
			"name": "open_period",
			"type": "number",
			"default": 0,
			"description": "Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with *close\\_date*.",
			"routing": {
				"send": {
					"property": "open_period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Options",
			"name": "options",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON-serialized list of answer options, 2-10 strings 1-100 characters each",
			"routing": {
				"send": {
					"property": "options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Question",
			"name": "question",
			"type": "string",
			"default": "",
			"description": "Poll question, 1-300 characters",
			"routing": {
				"send": {
					"property": "question",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Poll type, “quiz” or “regular”, defaults to “regular”",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Poll"
					]
				}
			}
		},
		{
			"displayName": "POST /sendSticker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "POST /sendSticker<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVenue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "Address of the venue",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Allow Sending Without Reply",
			"name": "allow_sending_without_reply",
			"type": "boolean",
			"default": true,
			"description": "Pass *True*, if the message should be sent even if the specified replied-to message is not found",
			"routing": {
				"send": {
					"property": "allow_sending_without_reply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Disable Notification",
			"name": "disable_notification",
			"type": "boolean",
			"default": true,
			"description": "Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.",
			"routing": {
				"send": {
					"property": "disable_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Foursquare Id",
			"name": "foursquare_id",
			"type": "string",
			"default": "",
			"description": "Foursquare identifier of the venue",
			"routing": {
				"send": {
					"property": "foursquare_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Foursquare Type",
			"name": "foursquare_type",
			"type": "string",
			"default": "",
			"description": "Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.)",
			"routing": {
				"send": {
					"property": "foursquare_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Google Place Id",
			"name": "google_place_id",
			"type": "string",
			"default": "",
			"description": "Google Places identifier of the venue",
			"routing": {
				"send": {
					"property": "google_place_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Google Place Type",
			"name": "google_place_type",
			"type": "string",
			"default": "",
			"description": "Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)",
			"routing": {
				"send": {
					"property": "google_place_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Latitude",
			"name": "latitude",
			"type": "number",
			"default": 0,
			"description": "Latitude of the venue",
			"routing": {
				"send": {
					"property": "latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Longitude",
			"name": "longitude",
			"type": "number",
			"default": 0,
			"description": "Longitude of the venue",
			"routing": {
				"send": {
					"property": "longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "Reply To Message Id",
			"name": "reply_to_message_id",
			"type": "number",
			"default": 0,
			"description": "If the message is a reply, ID of the original message",
			"routing": {
				"send": {
					"property": "reply_to_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Name of the venue",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Venue"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVideo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Video"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVideo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Video"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVideoNote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Video Note"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVideoNote<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Video Note"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVoice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Voice"
					]
				}
			}
		},
		{
			"displayName": "POST /sendVoice<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Voice"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatAdministratorCustomTitle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Administrator Custom Title"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Administrator Custom Title"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Custom Title",
			"name": "custom_title",
			"type": "string",
			"default": "",
			"description": "New custom title for the administrator; 0-16 characters, emoji are not allowed",
			"routing": {
				"send": {
					"property": "custom_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Administrator Custom Title"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Administrator Custom Title"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatDescription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Description"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Description"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "New chat description, 0-255 characters",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Description"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatPermissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Permissions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Permissions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "{}",
			"description": "Describes actions that a non-administrator user is allowed to take in a chat.",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatPhoto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatPhoto<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatStickerSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Sticker Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Sticker Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sticker Set Name",
			"name": "sticker_set_name",
			"type": "string",
			"default": "",
			"description": "Name of the sticker set to be set as the group sticker set",
			"routing": {
				"send": {
					"property": "sticker_set_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Sticker Set"
					]
				}
			}
		},
		{
			"displayName": "POST /setChatTitle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Title"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Title"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "New chat title, 1-255 characters",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Chat Title"
					]
				}
			}
		},
		{
			"displayName": "POST /setGameScore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Unique identifier for the target chat",
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "Disable Edit Message",
			"name": "disable_edit_message",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the game message should not be automatically edited to include the current scoreboard",
			"routing": {
				"send": {
					"property": "disable_edit_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "force",
			"type": "boolean",
			"default": true,
			"description": "Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters",
			"routing": {
				"send": {
					"property": "force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the sent message",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Score",
			"name": "score",
			"type": "number",
			"default": 0,
			"description": "New score, must be non-negative",
			"routing": {
				"send": {
					"property": "score",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "User identifier",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Game Score"
					]
				}
			}
		},
		{
			"displayName": "POST /setMyCommands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set My Commands"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set My Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /setPassportDataErrors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Passport Data Errors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Errors",
			"name": "errors",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON-serialized array describing the errors",
			"routing": {
				"send": {
					"property": "errors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Passport Data Errors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "User identifier",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Passport Data Errors"
					]
				}
			}
		},
		{
			"displayName": "POST /setStickerPositionInSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Sticker Position In Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Position",
			"name": "position",
			"type": "number",
			"default": 0,
			"description": "New sticker position in the set, zero-based",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Sticker Position In Set"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sticker",
			"name": "sticker",
			"type": "string",
			"default": "",
			"description": "File identifier of the sticker",
			"routing": {
				"send": {
					"property": "sticker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Sticker Position In Set"
					]
				}
			}
		},
		{
			"displayName": "POST /setStickerSetThumb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Sticker Set Thumb"
					]
				}
			}
		},
		{
			"displayName": "POST /setStickerSetThumb<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Sticker Set Thumb"
					]
				}
			}
		},
		{
			"displayName": "POST /setWebhook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /setWebhook<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Set Webhook"
					]
				}
			}
		},
		{
			"displayName": "POST /stopMessageLiveLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Inline Message Id",
			"name": "inline_message_id",
			"type": "string",
			"default": "",
			"description": "Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message",
			"routing": {
				"send": {
					"property": "inline_message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Required if *inline\\_message\\_id* is not specified. Identifier of the message with live location to stop",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Message Live Location"
					]
				}
			}
		},
		{
			"displayName": "POST /stopPoll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Identifier of the original message with the poll",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Poll"
					]
				}
			}
		},
		{
			"displayName": "Reply Markup",
			"name": "reply_markup",
			"type": "json",
			"default": "{\n  \"inline_keyboard\": [\n    [\n      {\n        \"login_url\": {}\n      }\n    ]\n  ]\n}",
			"description": "This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.",
			"routing": {
				"send": {
					"property": "reply_markup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Stop Poll"
					]
				}
			}
		},
		{
			"displayName": "POST /unbanChatMember",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unban Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unban Chat Member"
					]
				}
			}
		},
		{
			"displayName": "Only If Banned",
			"name": "only_if_banned",
			"type": "boolean",
			"default": true,
			"description": "Do nothing if the user is not banned",
			"routing": {
				"send": {
					"property": "only_if_banned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unban Chat Member"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Unique identifier of the target user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unban Chat Member"
					]
				}
			}
		},
		{
			"displayName": "POST /unpinAllChatMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unpin All Chat Messages"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unpin All Chat Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /unpinChatMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unpin Chat Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat Id",
			"name": "chat_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chat_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unpin Chat Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "message_id",
			"type": "number",
			"default": 0,
			"description": "Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.",
			"routing": {
				"send": {
					"property": "message_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Unpin Chat Message"
					]
				}
			}
		},
		{
			"displayName": "POST /uploadStickerFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Upload Sticker File"
					]
				}
			}
		},
		{
			"displayName": "POST /uploadStickerFile<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Upload Sticker File"
					]
				}
			}
		},
];
