output "app_url" {
  value = google_cloud_run_service.app.status[0].url
}

output "repo_url" {
  value = google_sourcerepo_repository.repo.url
}
