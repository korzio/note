// Copyright 2016 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package types

import (
	"encoding/json"
	"reflect"
	"testing"
)

func TestLegacyStatus(t *testing.T) {
	tests := []struct {
		s string
		v []string
	}{
		{`"[]"`, []string{}},
		{`"['one']"`, []string{"one"}},
		{`"['one', u'two']"`, []string{"one", "two"}},
		{`["one", "two"]`, []string{"one", "two"}},
	}
	for i, test := range tests {
		var v LegacyStatus
		if err := json.Unmarshal([]byte(test.s), &v); err != nil {
			t.Errorf("%d: json.Unmarshal(%s): %v", i, test.s, err)
			continue
		}
		if !reflect.DeepEqual(v, LegacyStatus(test.v)) {
			t.Errorf("%d: v = %v; want %v", i, v, test.v)
		}
	}

	tests = []struct {
		s string
		v []string
	}{
		{"[]", nil},
		{"[]", []string{}},
		{`["one"]`, []string{"one"}},
	}
	for i, test := range tests {
		s := LegacyStatus(test.v)
		b, err := json.Marshal(&s)
		if err != nil {
			t.Errorf("%d: json.Marshal(%s): %v", i, test.v, err)
			continue
		}
		if string(b) != test.s {
			t.Errorf("%d: b = %s; want %s", i, b, test.s)
		}
	}
}
