/**
 * Copyright (C) 2021 Axis Communications AB, Lund, Sweden
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const secrets = require("./secrets");

const handler = async (event) => {
  const accessToken = await secrets.getAccessToken();
  const isAuthorized = event.headers?.authorization === `Bearer ${accessToken}`;

  return {
    isAuthorized,
  };
};

module.exports = {
  handler,
};
