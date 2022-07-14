class MainError extends Error {
  constructor(message = "", { details = "", type = "", code = null } = {}) {
    super(message);
    this.name = "MainError";
    this.details = details;
    this.type = type;
    this.code = code;
  }
}

function test() {
  throw new MainError("this field can be used to set a message error");
}

function test2() {
  throw new MainError("this field can be used to set a message error", {
    details: "this field can be used to set a verborse description of error",
    type: "this field can be use to set the type of error",
    code: "this field can be use to set the code of error",
  });
}

try {
  test();
} catch (e) {
  console.log("Available properties:", Object.getOwnPropertyNames(e));
  console.log("e.name:", e.name);
  console.log("e.message:", e.message);
  console.log("e.details:", e.details);
  console.log("e.type:", e.type);
  console.log("e.code:", e.code);
}

try {
  test2();
} catch (e) {
  console.log("Available properties:", Object.getOwnPropertyNames(e));
  console.log("e.name:", e.name);
  console.log("e.message:", e.message);
  console.log("e.details:", e.details);
  console.log("e.type:", e.type);
  console.log("e.code:", e.code);
}
