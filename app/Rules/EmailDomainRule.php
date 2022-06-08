<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class EmailDomainRule implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        list($username, $domain) = explode('@', $value);

        if ($username && $domain) {
            if (filter_var(gethostbyname($domain), FILTER_VALIDATE_IP)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute needs to have a valid domain name.';
    }
}
