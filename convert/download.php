<?php
$videoUrl = $_POST['videoUrl'];
$destination = $_POST['destination'];

if (empty($videoUrl)) {
  $response = ['status' => 'error', 'message' => 'Video URL is required.'];
} else {
  $output = shell_exec("youtube-dl --extract-audio --audio-format mp3 --output '$destination/%(title)s.%(ext)s' $videoUrl 2>&1");

  if (strpos($output, '[download] Destination:') !== false) {
    $response = ['status' => 'success', 'message' => 'Video'];
  } else {
    $response = ['status' => 'error', 'message' => 'An error occurred.'];
  }
}

header('Content-Type: application/json');
echo json_encode($response);
?>

