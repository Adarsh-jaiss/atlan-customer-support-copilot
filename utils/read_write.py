import json
import os

dir_name = "output"
os.makedirs(dir_name, exist_ok=True)

def write_into_file(content, file_type: str, filepath: str):
    mode = "w"
    if file_type == "json":
        full_path = os.path.join(dir_name, filepath)
        with open(full_path, mode) as f:
            json.dump(content, f, indent=2)
    elif file_type in ["txt", "markdown", "md"]:
        full_path = os.path.join(dir_name, filepath)
        with open(full_path, mode) as f:
            f.write(str(content))
    else:
        raise ValueError(f"Unsupported file type: {file_type}")
    
    
def read_from_file(filepath):
    mode = "r"
    _, ext = os.path.splitext(filepath)
    with open(filepath, mode) as f:
        if ext.lower() == ".json":
            return json.load(f)
        return f.read()