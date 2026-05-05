
<?php

$token = "8669353036:AAHebb-FbSGvPsf_NDMpCy0GpFZ1qKvzXls";
$api = "https://api.telegram.org/bot$token/";

// =======================
// GET UPDATE
// =======================
$update = json_decode(file_get_contents("php://input"), true);

if (!$update) {
    echo "Bot running...";
    exit;
}

$message = $update["message"];
$chat_id = $message["chat"]["id"];
$text = $message["text"];

// =======================
// FUNCTION SEND MESSAGE
// =======================
function sendMessage($chat_id, $text) {
    global $api;

    file_get_contents($api . "sendMessage?" . http_build_query([
        "chat_id" => $chat_id,
        "text" => $text
    ]));
}

// =======================
// COMMANDS
// =======================
if ($text == "/start") {
    sendMessage($chat_id, "👋 សួស្តី!\n\n🤖 PHP Bot របស់អ្នកដំណើរការ!");
} else {
    sendMessage($chat_id, "✅ អ្នកបានផ្ញើ: " . $text);
}

?>