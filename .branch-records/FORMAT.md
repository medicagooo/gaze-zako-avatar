# Registry format

BRANCHES.md is JSON. Dates use Asia/Tokyo; `changes[].date` is the first requirement date, with evidenced implementation dates in task evidence. Integration and deployment dates remain null until proven. Each records path resolves to task state. Event references use `events.jsonl#id`; pending references use `task-id:event-id`. Events are unique JSON objects, one per line. Operation after fields express intent only. Query Git for branches, dirt, worktrees and commits; do not infer them from events. Documentation and Git operations belong in events, not business changes.
