import * as fs from "node:fs";

// One number, digits only: the honest count of open browser tabs.
// 127 open tabs — the tally of a mind that never closes anything.
// The file must end exactly at the last character of the line: no newline is appended.
// The count is honest. None of the tabs were closed to make it smaller.
const entry = "127";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
