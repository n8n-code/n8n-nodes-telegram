# @n8n-dev/n8n-nodes-telegram

![telegram Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-telegram.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-telegram)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing telegram API integrations by hand.**

Every time you connect n8n to telegram, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to telegram took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-telegram
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-telegram`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **telegram API** → paste your API key
3. Drag the **telegram** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Default | POST POST Add Sticker To Set, POST POST Answer Callback Query, POST POST Answer Inline Query, POST POST Answer Pre Checkout Query, POST POST Answer Shipping Query, POST POST Close, POST POST Copy Message, POST POST Create New Sticker Set, POST POST Delete Chat Photo, POST POST Delete Chat Sticker Set, POST POST Delete Message, POST POST Delete Sticker From Set, POST POST Delete Webhook, POST POST Edit Message Caption, POST POST Edit Message Live Location, POST POST Edit Message Media, POST POST Edit Message Reply Markup, POST POST Edit Message Text, POST POST Export Chat Invite Link, POST POST Forward Message, POST POST Get Chat, POST POST Get Chat Administrators, POST POST Get Chat Member, POST POST Get Chat Members Count, POST POST Get File, POST POST Get Game High Scores, POST POST Get Me, POST POST Get My Commands, POST POST Get Sticker Set, POST POST Get Updates, POST POST Get User Profile Photos, POST POST Get Webhook Info, POST POST Kick Chat Member, POST POST Leave Chat, POST POST Log Out, POST POST Pin Chat Message, POST POST Promote Chat Member, POST POST Restrict Chat Member, POST POST Send Animation, POST POST Send Audio, POST POST Send Chat Action, POST POST Send Contact, POST POST Send Dice, POST POST Send Document, POST POST Send Game, POST POST Send Invoice, POST POST Send Location, POST POST Send Media Group, POST POST Send Message, POST POST Send Photo, POST POST Send Poll, POST POST Send Sticker, POST POST Send Venue, POST POST Send Video, POST POST Send Video Note, POST POST Send Voice, POST POST Set Chat Administrator Custom Title, POST POST Set Chat Description, POST POST Set Chat Permissions, POST POST Set Chat Photo, POST POST Set Chat Sticker Set, POST POST Set Chat Title, POST POST Set Game Score, POST POST Set My Commands, POST POST Set Passport Data Errors, POST POST Set Sticker Position In Set, POST POST Set Sticker Set Thumb, POST POST Set Webhook, POST POST Stop Message Live Location, POST POST Stop Poll, POST POST Unban Chat Member, POST POST Unpin All Chat Messages, POST POST Unpin Chat Message, POST POST Upload Sticker File |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from telegram docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official telegram OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **telegram** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the telegram API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
