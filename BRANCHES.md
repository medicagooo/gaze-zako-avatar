{
  "format": ".branch-records/FORMAT.md",
  "timezone": "Asia/Tokyo",
  "records": [".branch-records/avatar-v1/state.json"],
  "active": [],
  "pending": ["avatar-v1:push-20260920-01"],
  "read": "Resolve pending intent against live Git state before retrying. Implementation is local only; no deployment or remote integration is claimed.",
  "changes": [
    {"id":"avatar-v1","date":"2026-09-20","domain":"avatar-editor","business_change":"New gaze zako avatar static website: original fixed-position vector stickers, eight hairstyles, configurable colors and heterochromia, five ear choices, eight hair-accessory choices, seven facewear choices, eight backgrounds, local editable history, SVG and three PNG export sizes, Chinese/English/Japanese, responsive pale-pink rounded UI.","previous":"No project existed.","result":"Offline-built static application verified locally; no login, synchronization or cloud deployment.","status":"implemented","request":".branch-records/avatar-v1/events.jsonl#request-implementation","evidence":["app.js","VERIFICATION.md"],"details":".branch-records/avatar-v1/state.json"},
    {"id":"avatar-corner-v2","date":"2026-09-20","implementation_date":"2026-09-20","domain":"avatar-rendering","business_change":"Replace centered upright framing with a larger clockwise-tilted head peeking from the lower-left; backgrounds remain fixed and all sticker layers stay aligned. Rabbit ears use reduced scale for clearance. Existing history options re-render in the new composition.","previous":"Centered upright half-head.","result":"Updated shared renderer used by preview, options, history, SVG and PNG; local only pending explicit push.","status":"implemented","supersedes":"avatar-v1 framing only","request":".branch-records/avatar-v1/events.jsonl#request-corner-20260920","evidence":["app.js","VERIFICATION.md"],"details":".branch-records/avatar-v1/state.json"}
  ]
}
