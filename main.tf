terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
  required_version = ">= 1.0"
}
provider "local" {}
resource "local_file" "sample_file" {
  filename = "sample.txt"
  content  = "Hello! This file was created using Terraform."
}
