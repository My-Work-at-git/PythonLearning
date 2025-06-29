// JS script to fetch and render basics.txt into #content
fetch('notes/basics.txt')
  .then(response => {
    if (!response.ok) throw new Error("File not found");
    return response.text();
  })
  .then(text => {
    document.getElementById('content').textContent = text;
  })
  .catch(error => {
    document.getElementById('content').textContent = "Error loading notes.";
    console.error("Failed to load notes:", error);
  });
