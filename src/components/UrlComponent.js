import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios"

const UrlComponent = () => {
  const [url, setUrl] = useState("")
  
  const handleClick = () => {
    let data = {
      url
    }
    axios({
      method: 'post',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      },
      url: "https://url-validation-django.herokuapp.com/"
    }).then(result => {
      alert(result.data)
    })
      .catch(err => {
        alert(err);
      })
  }

  return (
    <form>
      <div>
        <h1>
          <label for="url">Enter a Source </label>
        </h1>

        <TextField
          id="url"
          label="URL"
          variant="filled"
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          fullWidth
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          sx={{ m: 10, width: "60ch", top: "-30px", backgroundColor: "white" }}
          required
        />
      </div>
      <div>
        <Button
          style={{
            top: "-48px",
          }}
          variant="contained"
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UrlComponent;
