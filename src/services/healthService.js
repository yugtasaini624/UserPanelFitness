const API = "https://backendfitness-6mp4.onrender.com/api/health";

export const getHealthLogs = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const createHealthLog = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const deleteHealthLog = async (id) => {
  const token = localStorage.getItem("token");

  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
