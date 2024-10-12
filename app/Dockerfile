FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements.txt file from the current directory (now in the same context)
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the FastAPI app to the working directory
COPY . .

EXPOSE 8000

# Command to run FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
