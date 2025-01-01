const { Connection, WorkflowClient } = require("@temporalio/client");

exports.processEvent = async (args, hospitalCode, eventCode) => {

    args = {
        ...args,
        hospitalCode: hospitalCode,
        eventCode: eventCode  
    }

    try {
        const connection = await Connection.connect();
        const client = new WorkflowClient(connection.service);

        const result = await client.execute("hmsWorkflow", {
            taskQueue: process.env.TASK_QUEUE || 'hms-task-queue',
            workflowId: "djfhskdfhk",
            args: [args]
        });
        console.log("Workflow completed" + result)
        return { success: "Workflow completed", result };
    } catch (error) {
        console.error(error);
        return { error: "Failed to start appointment workflow" };
    }
}


