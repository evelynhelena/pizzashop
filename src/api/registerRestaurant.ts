import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  email: string
  managerName: string
  restaurantName: string
  phone: string
}

export async function registerRestaurant({
  email,
  managerName,
  restaurantName,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, managerName, restaurantName, phone })
}
