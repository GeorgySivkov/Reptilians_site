import { execSync } from "child_process";

const cwd = "/vercel/share/v0-project";

console.log("Removing node_modules...");
try {
  execSync("rm -rf node_modules", { cwd, stdio: "inherit" });
} catch (e) {
  console.log("Could not remove node_modules:", e.message);
}

console.log("Removing .next cache...");
try {
  execSync("rm -rf .next", { cwd, stdio: "inherit" });
} catch (e) {
  console.log("Could not remove .next:", e.message);
}

console.log("Running npm install...");
try {
  execSync("npm install", { cwd, stdio: "inherit", timeout: 120000 });
  console.log("npm install completed successfully.");
} catch (e) {
  console.log("npm install failed:", e.message);
}

// Verify key modules resolve
const modules = ["clsx", "tailwind-merge", "class-variance-authority"];
for (const mod of modules) {
  try {
    const resolved = execSync(`node -e "console.log(require.resolve('${mod}'))"`, { cwd, encoding: "utf-8" }).trim();
    console.log(`OK: ${mod} -> ${resolved}`);
  } catch {
    console.log(`FAIL: ${mod} not found`);
  }
}
