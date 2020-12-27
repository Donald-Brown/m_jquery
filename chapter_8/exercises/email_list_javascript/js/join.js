const decode = text => {
  text = text.replace(/\+/g, ' ');
  text = text.replace(/%[a-fA-F0-9]{2}/g, hex => {
    return String.fromCharCode('0x' + hex.substr(1, 2));
  });
  return text;
}

const display_data = () => {
  const url_parts = location.toString().split('?');
  if (url_parts.length !== 2) return;
  let html = ''

  const fields = url_parts[1].split('&');
  if (fields.length === 0) {
    html = `<p>No data submitted.</p>`;
  } else {
    html += `<dl>`;
    let field_parts;
    for (let field in fields) {
      field_parts = fields[field].split('=');
      field_parts[0] = decode(field_parts[0]);
      field_parts[1] = decode(field_parts[1]);
      html += `<dt>${field_parts[0]}</dt>`;
      html += `<dd>${field_parts[1]}</dd>`;
    }
    html += `</dl>`;
  }
  return html;
}

$(function() {
  $('#display_data').html(display_data());
}); //? end ready