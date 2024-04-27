from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class ProfileTest(TestCase):
    def test_profile(self):
        self.assertEqual(1, 1) 
    def test_server_connection(self):
        response = self.client.get(reverse('test-api'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Server is working!') 
        self.assertContains(response, 'status')